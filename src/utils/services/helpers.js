export const nameEmptyFormField = (userDetails) => {
    if (userDetails.name === "") {
      return {
        message: "Name cannot be empty",
        field: "name",
      };
    }
    if(userDetails.username === "") {
        return {
            message: "Username cannot be empty",
            field: "username",
        };
    }
    if(userDetails.email === "") {
        return {
            message: "Email cannot be empty",
            field: "email",
        };
    }
    if(userDetails.password === "") {
        return {
            message: "Password cannot be empty",
            field: "password",
        };
    }

    return null;
}

export const notAgreedTOS = (tos) => {
    if(!tos) {
        return {
            message: "Please agree to Dribbble's Terms and Conditions"
        }
    }
    return null;
}
