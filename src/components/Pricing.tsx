
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Smartphone, Users } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      period: "forever",
      description: "Explore 5 AR lessons & chat with the AI tutor—no credit card required.",
      features: [
        "5 AR lesson experiences",
        "Basic AI chat tutor",
        "Web browser access",
        "Community support"
      ],
      icon: <Star className="text-yellow-500" size={24} />,
      popular: false,
      cta: "Start Free"
    },
    {
      name: "Learner Plan",
      price: "$1.99",
      period: "/month",
      description: "Unlimited AR, AI-chat help, and your own 3D model uploads.",
      features: [
        "Unlimited AR lessons",
        "Advanced AI chat tutor",
        "Upload custom 3D models",
        "Progress tracking",
        "Offline mode",
        "Priority support"
      ],
      icon: <Smartphone className="text-purple-500" size={24} />,
      popular: true,
      cta: "Choose Learner",
      discount: "50% off first 3 months via Google Play!"
    },
    {
      name: "Classroom Plan",
      price: "$6.99",
      period: "/month per teacher",
      description: "All-access for classes of up to 30 students, shared tracking, plus priority support.",
      features: [
        "Everything in Learner Plan",
        "Up to 30 student accounts",
        "Classroom management tools",
        "Shared progress tracking",
        "Custom lesson plans",
        "Teacher dashboard",
        "Dedicated support"
      ],
      icon: <Users className="text-cyan-500" size={24} />,
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Choose Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, upgrade anytime. Special launch pricing for our mobile app!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-purple-500 shadow-2xl scale-105' : 'shadow-lg'} transition-all duration-300 hover:shadow-xl`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-gray-100 to-gray-200">
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-gray-900">
                  {plan.price}
                  <span className="text-lg font-medium text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
                {plan.discount && (
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full mt-2 inline-block">
                    {plan.discount}
                  </div>
                )}
              </CardHeader>

              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                    : 'bg-gray-900 hover:bg-gray-800'
                  } text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to transform your classroom? Contact us for custom enterprise solutions.
          </p>
          <Button variant="outline" size="lg" className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
