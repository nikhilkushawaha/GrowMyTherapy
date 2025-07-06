'use client';

import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const useContactForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^[\d\s\-()]{10,}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.reason.trim()) newErrors.reason = "Please share your reason";
    if (!formData.preferredTime.trim()) newErrors.preferredTime = "Preferred time required";
    if (!formData.consent) newErrors.consent = "Consent is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Thank you!",
        description: "We'll reach out within 24 hours.",
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        reason: '',
        preferredTime: '',
        consent: false,
      });
      setErrors({});
    } catch {
      toast({
        title: "Something went wrong",
        description: "Try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return { formData, errors, isSubmitting, handleInputChange, handleSubmit };
};
