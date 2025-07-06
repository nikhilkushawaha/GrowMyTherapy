import { Card, CardContent } from "@/components/ui/card";

const EmergencySupport = () => (
  <Card className="bg-[hsla(43.64,31.43%,93.14%,1)] text-[hsla(60,1.56%,25.1%,1)] border-0">
    <CardContent className="p-8">
      <h3 className="text-2xl font-serif font-semibold mb-4">Emergency Support</h3>
      <p className="mb-4">
        If you're experiencing a mental health emergency, please contact:
      </p>
      <div className="space-y-2">
        <p><strong>Suicide Prevention Lifeline:</strong> 988</p>
        <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
        <p><strong>Emergency Services:</strong> 911</p>
      </div>
    </CardContent>
  </Card>
);

export default EmergencySupport;