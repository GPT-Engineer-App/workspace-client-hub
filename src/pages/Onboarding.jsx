import { Button } from "@/components/ui/button";

const Onboarding = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Service</h1>
      <h2 className="text-xl mb-6">Here's how we work</h2>
      <div className="text-left space-y-4">
        <p>Step 1: Register and create your profile.</p>
        <p>Step 2: Browse our services and choose what you need.</p>
        <p>Step 3: Place your order and wait for confirmation.</p>
        <p>Step 4: Track your order status in your dashboard.</p>
        <p>Step 5: Receive your order and provide feedback.</p>
      </div>
      <div className="mt-6 flex justify-between">
        <Button variant="outline">Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Onboarding;