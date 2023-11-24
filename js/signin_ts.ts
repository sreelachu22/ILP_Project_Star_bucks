interface UserData {
  id: string;
  email: string;
  firstName: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
}

const getUserData: Promise<Response> = fetch(
  "https://dummyjson.com/users?select=id,email,firstName,username,password,birthDate,image"
);

const users: UserData[] = [];

getUserData
  .then((response) => response.json())
  .then((data) => {
    data.users.forEach((element: UserData) => {
      users.push(element);
    });
  });

console.log(users);

function validateLogin(): void {
  const usernameField: HTMLInputElement | null = document.getElementById(
    "login-username"
  ) as HTMLInputElement;
  const passwordField: HTMLInputElement | null = document.getElementById(
    "login-password"
  ) as HTMLInputElement;
  const registeredUsersData: string | null =
    localStorage.getItem("registeredUsers");

  if (!usernameField || !passwordField) {
    return;
  }

  if (usernameField.value === "") {
    alert("Username cannot be empty");
  } else if (passwordField.value.length < 8) {
    alert("Password must be minimum 8 characters");
  } else if (registeredUsersData) {
    const registeredUsers: UserData[] = JSON.parse(registeredUsersData);

    if (registeredUsers.length > 0) {
      registeredUsers.forEach((registeredUser) => {
        if (
          registeredUser.username === usernameField.value &&
          registeredUser.password === passwordField.value
        ) {
          sessionStorage.setItem(
            "loggedInUser",
            JSON.stringify(registeredUser)
          );
          window.location.href = "pay.html";
        }
      });
    }
  } else {
    const userId: number = isValidLogin(
      usernameField.value,
      passwordField.value
    );

    if (userId === -1) {
      alert("User does not exist");
    } else {
      sessionStorage.clear();
      sessionStorage.setItem("loggedInUser", JSON.stringify(users[userId]));
      window.location.href = "pay.html";
    }
  }
}

function isValidLogin(checkUsername: string, checkPassword: string): number {
  for (let i = 0; i < users.length; i++) {
    if (
      checkUsername === users[i].username &&
      checkPassword === users[i].password
    ) {
      return i;
    }
  }
  return -1;
}
