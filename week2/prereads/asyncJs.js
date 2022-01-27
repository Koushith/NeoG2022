// // let promise = new Promise(function (resolve, reject) {
// //   // executor (the producing code, "singer")
// // });

// // let promise = new Promise(function (resolve, reject) {
// //   setTimeout(() => reject(new Error('Whoops!')), 1000);
// // });

// // // reject runs the second function in .then
// // promise.then(
// //   (result) => console.log(result), // doesn't run
// //   (error) => console.log(error) // shows "Error: Whoops!" after 1 second
// // );
// // console.log(promise);

// // let promise = new Promise(function (resolve, reject) {
// //   // executoe- ("Producing code- singer")
// //   setTimeout(() => resolve('done'), 3000);
// // });

// // promise.then(function (result) {
// //   console.log(result);
// // });

// // console.log(promise);

// async function f() {
//   return 1;
// }

// //f().then((data) => console.log(data)); // 1

// const asyncTest = async () => {
//   return 1;
// };

// //asyncTest().then((data) => console.log(data));

// // async function f() {
// //   let promise = new Promise((resolve, reject) => {
// //     setInterval(() => resolve('done'), 1000);
// //   });
// //   console.log(promise);
// //   let result = await promise;
// //   console.log(result);
// // }

// // f();

// async function showAvatar() {
//   // read our JSON
//   //let response = await fetch('/article/promise-chaining/user.json');
//   let user = 'koushith';

//   // read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // show the avatar
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = 'promise-avatar-example';
//   document.body.append(img);

//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

const doSomethingAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('I did something'), 3000);
  });
};

const doSomething = (Something = async () => {
  console.log(await doSomethingAsync());
});
console.log('Before');
doSomething();
console.log('After');
