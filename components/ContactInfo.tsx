import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => (
  <Card className="bg-gray-50 border-0">
    <CardContent className="p-8">
      <h3 className="text-2xl font-serif font-semibold text-primary mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Office Location</h4>
          <p className="text-gray-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
          <p className="text-gray-600">(323) 555-0192</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
          <p className="text-gray-600">serena@blakepsychology.com</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
          <div className="text-gray-600 space-y-1">
            <p><strong>In-person:</strong> Tue & Thu, 10 AM–6 PM</p>
            <p><strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ContactInfo;