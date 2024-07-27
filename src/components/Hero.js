
const Hero = () => {
    return (
      <section
        id="hero"
        className="flex flex-col items-center justify-end p-12 relative"
      >
        <div className="w-[95%] h-[95%] absolute border-2 border-gray-700 rounded-2xl top-1/2 transform -translate-y-1/2 pointer-events-none"></div>
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="uppercase w-full text-center split-word">
            <span>B</span>
            <span>u</span>
            <span>g</span>
            <span>a</span>
            <span>t</span>
            <span>t</span>
            <span>i</span>
            <span> </span>
            <span>c</span>
            <span>h</span>
            <span>i</span>
            <span>r</span>
            <span>o</span>
            <span>n</span>
          </h1>
          <p className="w-full text-center">
            A masterpiece of function and aerodynamics. A stunning
            tour-de-force. And a special edition to celebrate an historical
            achievement.
          </p>
        </div>
      </section>
    );
}

export default Hero;