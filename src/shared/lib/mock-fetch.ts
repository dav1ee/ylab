import users from '../../../users.json';

type Options = {
  method: string;
  headers?: Record<string, string>;
  body?: string;
};

type Response = {
  ok: boolean;
  json: any;
};

export const mockFetch = (url: string, options: Options): Promise<Response> =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (url === '/auth' && options.method === 'POST') {
        if (!options.body) return;

        const { email, password } = JSON.parse(options.body);

        const user = users.find(
          (user) => user.email === email && user.password === password
        );

        if (!user) {
          resolve({
            ok: false,
            json: () => Promise.resolve({ error: 'Invalid email or password' })
          });
        }

        resolve({
          ok: true,
          json: () => Promise.resolve(user)
        });
      } else {
        resolve({
          ok: false,
          json: () => Promise.resolve({ error: 'Not Found' })
        });
      }
    }, 700);
  });
