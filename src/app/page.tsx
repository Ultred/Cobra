import MaxWidthWraper from "@/components/MaxWidthWraper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWraper className="text-center py-8">
          <h2 className="space-y-1 text-4xl font-bold">
            Your Image on <span>Custom</span> Phone Case
          </h2>
          <p>
            Capture your favorite memories with your own, one-of-one phone case
            CaseCobra allows you to protect your memories, not just your phone
            case.
          </p>
          <Button variant={"link"}>Test</Button>
        </MaxWidthWraper>
      </section>
    </div>
  );
}
