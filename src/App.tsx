import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "react-loading-skeleton/dist/skeleton.css";

function App(): JSX.Element {
  return (
    <div className="max-w-5xl mx-auto my-5 w-full">
      <div className="grid gap-4 mx-10">
        <div className="flex w-full">
          <div className="text-3xl font-bold">Frontend.</div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="relative">
            <Carousel opts={{ align: "start", loop: true }}>
              <div className="relative">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="relative">
                      <div className="p-1">
                        <div className="h-96 rounded-2xl overflow-hidden w-full">
                          <CardContent className="h-full p-0 relative">
                            <img
                              src={`https://picsum.photos/2000/2000?random=${index}`}
                              className="w-full h-full object-cover"
                            />
                          </CardContent>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute left-20 bottom-[200px] z-50">
                  <CarouselPrevious className="bg-black text-white border-none text-3xl" />
                </div>
                <div className="absolute right-20 bottom-[200px] z-50">
                  <CarouselNext className="bg-black text-white border-none text-3xl" />
                </div>
              </div>
            </Carousel>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white text-3xl font-bold z-10">
              <div className="bg-black bg-opacity-50 p-2 rounded">
                <p>Frontend</p>
                <p>Mockup</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <Card className="w-full border border-gray-300 bg-gray-200">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-md">Frontend</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
              <CardDescription className="text-xs font-bold">
                Last updated 5 mins ago
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full border border-gray-300 bg-gray-200">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-md">Mockup</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
              <CardDescription className="text-xs font-bold">
                Last updated 5 mins ago
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full border border-gray-300 bg-gray-200">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-md">Design</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
              <CardDescription className="text-xs font-bold">
                Last updated 5 mins ago
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full border border-gray-300 bg-gray-200">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-md">Test</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
              <CardDescription className="text-xs font-bold">
                Last updated 5 mins ago
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
