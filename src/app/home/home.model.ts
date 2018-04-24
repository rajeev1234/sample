export class Home {
  public name: string;
  public description: string;
  public image: string;
  constructor(name: string, desc: string, imagepath: string) {
  this.name = name;
  this.description = desc;
  this.image = imagepath;
  }
}
