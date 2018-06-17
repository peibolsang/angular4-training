import {LikeComponent} from './like.component'

let component = new LikeComponent(10, true);

component.onClick();

console.log(`likesCount: ${component.count}, isSelected: ${component.active}`)
