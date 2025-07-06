'use client';

import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

type ContactField = "name" | "phone" | "email" | "preferredTime";

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  const inputFields: {
    id: ContactField;
    label: string;
    type: string;
    placeholder: string;
  }[] = [
    { id: "name", label: "Full Name *", type: "text", placeholder: "Enter your full name" },
    { id: "phone", label: "Phone Number *", type: "tel", placeholder: "(323) 555-0192" },
    { id: "email", label: "Email Address *", type: "email", placeholder: "your.email@example.com" },
    { id: "preferredTime", label: "Preferred contact time *", type: "text", placeholder: "e.g., Weekday mornings, Tuesday evenings..." },
  ];

  return (
    <Card className="shadow-xl border-0">
      <CardContent className="p-8">
        <h3 className="text-2xl font-serif font-semibold text-gray-600 mb-6">
          Book Your Free Consultation
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {inputFields.map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <Label htmlFor={id} className="text-sm font-medium text-gray-700">
                {label}
              </Label>
              <Input
                id={id}
                type={type}
                value={formData[id]}
                onChange={(e) => handleInputChange(id, e.target.value)}
                className={`mt-1 ${errors[id] ? 'border-red-500' : ''}`}
                placeholder={placeholder}
              />
              {errors[id] && <p className="text-red-500 text-sm mt-1">{errors[id]}</p>}
            </div>
          ))}

          <div>
            <Label htmlFor="reason" className="text-sm font-medium text-gray-700">
              What brings you here? *
            </Label>
            <Textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              className={`mt-1 ${errors.reason ? 'border-red-500' : ''}`}
              rows={4}
              placeholder="Tell me briefly about what you'd like to work on..."
            />
            {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", !!checked)}
              className={errors.consent ? 'border-red-500' : ''}
            />
            <Label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
              I agree to be contacted by Dr. Serena Blake and understand my information will be kept confidential. *
            </Label>
          </div>
          {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[hsl(180,15.05%,63.53%)] hover:bg-[hsla(43.64,31.43%,93.14%,1)] text-black py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            {isSubmitting ? "Sending..." : "Schedule Free Consultation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
