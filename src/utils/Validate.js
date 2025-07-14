
export const validData = (email,password,name) =>{
    const emailValid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const firstNameValid = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(name);
    if(!firstNameValid) return 'invalid first name';
    if(!emailValid) return 'Email is not valid';
    if(!passwordValid) return 'password is not valid';
    
    return null;
}