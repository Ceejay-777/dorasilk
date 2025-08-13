import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Delivery Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-8">
              <div className="grid gap-3">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="090000000000"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="order">Order ID</Label>
                <Input
                  id="order"
                  type="text"
                  placeholder="Enter order ID"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Enter message" className="min-h-32" />
              </div>

              <Button type="submit" className="w-full rounded-full bg-gold-1">
                Contact us
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
