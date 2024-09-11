export type ClassMap = {
  badge: string;
  blockLink: string;
  bottom: string;
  center: string;
  copy: string;
  essentialCard: string;
  header: string;
  image: string;
  left: string;
  link: string;
  right: string;
  text: string;
};

export type ClassName = keyof ClassMap;

declare const styles: ClassMap;

export default styles;
