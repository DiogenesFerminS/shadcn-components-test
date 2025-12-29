import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const Page = () => {
  return (
    <Card className="max-w-90">
      <CardContent>
        <FieldSet className="mb-6">
            <FieldLegend>Personal Information</FieldLegend>
            <FieldGroup>
            <Field>
                <FieldLabel htmlFor="name">Full name</FieldLabel>
                <Input
                id="name"
                autoComplete="off"
                placeholder="Evil Rabbit"
                aria-invalid
                />
                <FieldError>Invalid Name</FieldError>
                <FieldDescription>
                This appears on invoices and emails.
                </FieldDescription>
            </Field>
            <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                id="username"
                autoComplete="off"
                // aria-invalid
                placeholder="Diogo13"
                />
                {/* <FieldError>Choose another username.</FieldError> */}
            </Field>
            </FieldGroup>
        </FieldSet>
        <FieldSeparator>Or continue with</FieldSeparator>
        <FieldSet className="mt-4">
          <FieldLegend variant="legend">Other Information</FieldLegend>
          <FieldGroup>
            <Field orientation="horizontal">
                <Switch id="newsletter" />
                <FieldLabel htmlFor="newsletter">
                Subscribe to the newsletter
                </FieldLabel>
            </Field>

            <Field>
                <FieldLabel htmlFor="input-id">Age</FieldLabel>
                {/* Input, Select, Switch, etc. */}
                <Input placeholder="18"/>
                <FieldDescription>Your age</FieldDescription>
                {/* <FieldError>You are older.</FieldError> */}
            </Field>
          </FieldGroup>
        </FieldSet>
        
      </CardContent>
    </Card>
  );
};

export default Page;
