export class UserService {
    private users: User[] = [];

    fetchUser(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    createUser(username: string, email: string): User {
        const newUser: User = {
            id: this.users.length + 1,
            username,
            email
        };
        this.users.push(newUser);
        return newUser;
    }
}