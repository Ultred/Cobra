import MaxWidthWraper from "@/components/MaxWidthWraper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWraper>
          <h2>Hello</h2>
        </MaxWidthWraper>
      </section>
    </div>
  );
}
