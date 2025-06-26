
interface AboutCardProps {
    image: string;
    title: string;
    description: string;
  }
  
  export default function AboutCard({ image, title, description }: AboutCardProps) {
    return (
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-12 shadow-lg max-w-4xl mx-auto">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 object-cover rounded-full border-2 border-white/20"
        />
        <div className="text-center md:text-left">
          <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  