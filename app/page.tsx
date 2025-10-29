// import { Button } from "@/components/atoms/button";
// import "@/styles/globals.css";
// import { ArrowRight, Sparkles } from "lucide-react";

// export default function Home() {
//   return (
//     <section className="h-screen flex items-center overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-accent-foreground text-sm font-medium">
//               <Sparkles className="h-4 w-4" />
//               <span>Custom Design Made Simple</span>
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
//               Your Dream Dress,{" "}
//               <span className="text-primary">Perfectly Crafted</span>
//             </h1>

//             <p className="text-md sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
//               Connect with talented designers and choose from premium fabrics to
//               create a dress that's uniquely yours. From concept to creation, we
//               make custom fashion accessible.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 size="lg"
//                 className="bg-primary hover:bg-primary/90 text-primary-foreground text-base"
//               >
//                 Start Your Design
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="text-base bg-transparent"
//               >
//                 Browse Designers
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="flex flex-wrap gap-8 pt-8">
//               <div>
//                 <div className="text-3xl font-bold text-primary">500+</div>
//                 <div className="text-sm text-muted-foreground">
//                   Expert Designers
//                 </div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-primary">10k+</div>
//                 <div className="text-sm text-muted-foreground">
//                   Happy Customers
//                 </div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-primary">1000+</div>
//                 <div className="text-sm text-muted-foreground">
//                   Premium Fabrics
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Image Grid */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-4">
//               <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary/20">
//                 <img
//                   src="/elegant-evening-dress-on-mannequin.jpg"
//                   alt="Evening dress"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="aspect-square rounded-2xl overflow-hidden bg-accent/20">
//                 <img
//                   src="/luxury-fabric-swatches.jpg"
//                   alt="Fabric swatches"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="space-y-4 pt-8">
//               <div className="aspect-square rounded-2xl overflow-hidden bg-muted/30">
//                 <img
//                   src="/fashion-designer-sketching-dress.jpg"
//                   alt="Designer sketching"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-primary/20">
//                 <img
//                   src="/custom-wedding-dress-detail.jpg"
//                   alt="Wedding dress"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Button } from "@/components/atoms/button";
import "@/styles/globals.css";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <section className="h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slay  text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Custom Design Made Simple</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Your Dream Dress,{" "}
              <span className="text-slay-purple">Perfectly Crafted</span>
            </h1>

            {/* Subtext */}
            <p className="text-md sm:text-xl text-black leading-relaxed max-w-2xl">
              Connect with talented designers and choose premium fabrics 
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-slay hover:bg-slay/80 text-foreground text-base"
              >
                Start Your Design
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-slay-purple text-slay-purple hover:bg-slay-purple/10"
              >
                Browse Designers
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-slay">500+</div>
                <div className="text-sm text-muted">Expert Designers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slay-purple">10k+</div>
                <div className="text-sm text-muted">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slay-yellow">1000+</div>
                <div className="text-sm text-muted">Premium Fabrics</div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 ">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slay-purple/10 shadow-lg shadow-slay-purple/20">
                <img
                  src="/elegant-evening-dress-on-mannequin.jpg"
                  alt="Evening dress"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-slay-yellow/10 shadow-lg shadwow-slay-yellow/20">
                <img
                  src="/luxury-fabric-swatches.jpg"
                  alt="Fabric swatches"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slay-blue/10 shadow-lg shadow-slay-blue/20">
                <img
                  src="/fashion-designer-sketching-dress.jpg"
                  alt="Designer sketching"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slay/10 shadow-lg shadow-slay/20">
                <img
                  src="/custom-wedding-dress-detail.jpg"
                  alt="Wedding dress"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
