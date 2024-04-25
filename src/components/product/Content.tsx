import { IconType } from "react-icons";

interface IContent {
  text: string;
  title: string;
  icon: IconType | React.ElementType;
  whiten?: boolean;
}

const Content = ({ text, title, icon: Icon, whiten = false }: IContent) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1.5 items-center">
        <div
          className={`${whiten ? "bg-slate-900/70 p-2.5" : "bg-primary/15 p-2"}  rounded-full`}
        >
          <Icon className="text-primary" size={30} />
        </div>
        <p
          className={`text-xl ${whiten ? "text-white" : "text-[#0b3558] "} font-bold`}
        >
          {title}
        </p>
      </div>
      <p
        className={`${whiten ? "text-white" : "text-muted-foreground"}  text-xl`}
      >
        {text}
      </p>
    </div>
  );
};

export default Content;
