// import { useEffect } from 'react';

// function useScrollRestoration() {
//     let position = 0;

//     useEffect(() => {
//         const handleScroll = () => {
//             position = window.scrollY;
//             console.log('Current Scroll Position:', position);
//         }
//         window.addEventListener('scroll', handleScroll);


//         // Cleanup the event listener when the component unmounts
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             console.log('leave: ', position)
//             sessionStorage.setItem('position', position);
//         };
//     }, [])

//     if (sessionStorage.getItem('position')) {
//         let height = parseFloat(sessionStorage.getItem('position'));
//         console.log('Height: ', height)
//         window.scrollTo(0, 900)
//     }else{
//         window.scrollTo(0,0);
//     }
// }

// export default useScrollRestoration;
