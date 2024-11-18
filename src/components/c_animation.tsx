// import { useSpring, easings } from "react-spring";


// export function transition(anim: Animation, reverse: boolean = false, delay: number = 100, startMultiply: number = 1, endMultiply: number = 1) {
//     switch (anim) {
//         case Animation.leftToRight:
//             return useSpring({
//                 delay: delay,
//                 reverse: reverse ? true : false,
//                 from: {
//                     opacity: 0,
//                     transform: `translateX(${-100 * startMultiply}%)`
//                 },
//                 to: {
//                     opacity: 1,
//                     transform: `translatex(${100 * (endMultiply - 1)}%)`
//                 },
//                 config: { easing: easings.easeInOutExpo, duration: 1000 },
//             });
//             case Animation.leftToRightReverseUp:
//             return useSpring({
//                 delay: delay,
//                 reverse: reverse ? true : false,
//                 default: {
                    
//                 }
//                 from: {
//                     opacity: 0,
//                     transform: `translateX(${-100 * startMultiply}%)`
//                 },
//                 to: {
//                     opacity: 1,
//                     transform: `translatex(${100 * (endMultiply - 1)}%)`
//                 },
//                 config: { easing: easings.easeInOutExpo, duration: 1000 },
//             });

//         default:
//             break;
//     }

// }
// export enum Animation {
//     leftToRight,
//     leftToRightReverseUp,
//     leftToRightReverseDown,
//     downToUp,
//     downToUpReverseUp,
//     upToDown,
//     upToDownReverseDown
// }