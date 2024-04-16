const UserProfileManager = () => {
	this.users = [];

	const addUser = (userInfo) => {
		const {name, email} = userInfo;
		const userId = this.generateUniqueId();
    const newUser = { id: userId, name, email };
    this.users.push(newUser);
    return newUser;
  };

	const removeUser = (userId) => {
		this.users = this.users.filter(user => user.id !== userId);
	};
	const updateUser = (userId, newInfo) => {
		//сломався
	};
	const findUserByName = (name) => {
    return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  };

	const getAllUsers = () => {
    return [...this.users];
  }
	const generateUniqueId = () => {
	  let uniqueId = 1;
    while (true) {
      uniqueId += 1;
      if (!this.users.some(user => user.id === uniqueId)) {
        break;
      }
    }
    return uniqueId;
  }

};

export default UserProfileManager;
