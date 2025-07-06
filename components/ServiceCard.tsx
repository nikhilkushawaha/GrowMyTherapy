import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  onLearnMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  price,
  onLearnMore,
}) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-t-xl" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-serif font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">{price}</span>
          <Button
            onClick={onLearnMore}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
