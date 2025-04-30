export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        const userId = req.params.id;
        try {
            const user = await this.userService.fetchUser(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        const userData = req.body;
        try {
            const newUser = await this.userService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}