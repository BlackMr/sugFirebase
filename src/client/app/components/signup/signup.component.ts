import {BaseComponent} from '../../frameworks/core/index';
@BaseComponent({
  moduleId: module.id,
  selector: 'sd-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent  {
  public newName: string = '';
    
    signup(): boolean {
    let nameOfRegistrant = this.newName;
    if (nameOfRegistrant) {
      console.log(nameOfRegistrant);
      console.log('running signup');
      return true;
    } else {
      console.log('not running');
      return true;
    }
  }
}
