import ImageCompareSlider from '../components/ImageCompareSlider';

export default function SliderTest() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-20">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-black">
          Image Compare Slider – HARD TEST
        </h1>

        <ImageCompareSlider />
      </div>
    </div>
  );
}
