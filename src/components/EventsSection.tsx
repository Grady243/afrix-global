import { Button } from "@/components/ui/button";

export default function EventsSection() {
    return (
        <section className="py-16 bg-white ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h4 className="text-blue-500">NOS EVENEMENTS</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Nos récentes évenements</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                    <div className="h-100 rounded-xl py-5 radius-10 bg-cover bg-center flex justify-center items-end"
                    style={{ backgroundImage: "url('./../images/event1.jpg')" }}
                    >
                    <Button size="lg" className="text-lg px-8 py-6 bg-blue-500">
                    Savoir plus
                    </Button>
                    </div>
                    <div className="h-100 rounded-xl py-5 radius-10 bg-cover bg-center flex justify-center items-end"
                    style={{ backgroundImage: "url('./../images/event2.jpg')" }}
                    >
                    <Button size="lg" className="text-lg px-8 py-6 bg-blue-500">
                    Savoir plus
                    </Button>
                    </div>
                    <div className="h-100 rounded-xl py-5 radius-10 bg-cover bg-center flex justify-center items-end"
                    style={{ backgroundImage: "url('./../images/event3.jpg')" }}
                    >
                    <Button size="lg" className="text-lg px-8 py-6 bg-blue-500">
                    Savoir plus
                    </Button>
                    </div>
                </div>
            </div>    
        </section>
    );
}