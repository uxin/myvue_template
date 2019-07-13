import Mock from "mockjs";

const UsersData = Mock.mock({
  'userList|1-20': [
    {
      id: 1,
      username: 'admin',
      password: '123456',
      avatar: 'https://avatars0.githubusercontent.com/u/22588905?v=4&s=120',
      name: '达康书记'
    }
  ]
})
export { UsersData };





// const UsersData = [
//   {
//     id: 1,
//     username: 'admin',
//     password: '123456',
//     avatar: 'https://avatars0.githubusercontent.com/u/22588905?v=4&s=120',
//     name: '达康书记'
//   }
// ];
// export { UsersData };