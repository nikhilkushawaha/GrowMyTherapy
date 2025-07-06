'use client'

import { useEffect, useState } from 'react'
import { toast as sonnerToast } from 'sonner';

type Toast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

let memoryState: Toast[] = []

type State = {
  toasts: Toast[]
}

const listeners: Array<(state: State) => void> = []

function notifyListeners() {
  listeners.forEach((l) => l({ toasts: memoryState }))
}

function dispatchToast(toast: Toast) {
  memoryState = [toast, ...memoryState].slice(0, TOAST_LIMIT)
  notifyListeners()
}

function removeToast(id?: string) {
  memoryState = memoryState.filter((t) => t.id !== id)
  notifyListeners()
}

function dismissToast(id?: string) {
  if (id) sonnerToast.dismiss(id);
  else memoryState.forEach((t) => sonnerToast.dismiss(t.id))
}

function toast({
  title,
  description,
  action,
}: {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}) {
  const id = genId()

  sonnerToast(
    title ?? '',
    {
      id,
      description,
      action,
      duration: TOAST_REMOVE_DELAY,
      onAutoClose: () => removeToast(id),
    }
  )

  const toastObj: Toast = {
    id,
    title,
    description,
    action,
    open: true,
    onOpenChange: (open) => {
      if (!open) dismissToast(id)
    },
  }

  dispatchToast(toastObj)

  return {
    id,
    dismiss: () => dismissToast(id),
    update: (props: Partial<Toast>) => {
      memoryState = memoryState.map((t) =>
        t.id === id ? { ...t, ...props } : t
      )
      notifyListeners()
    },
  }
}

function useToast() {
  const [state, setState] = useState<State>({ toasts: memoryState })

  useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss: dismissToast,
  }
}

export { toast, useToast }
