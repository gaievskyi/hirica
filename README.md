# Hirica

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.

### Usage

1. Create env from [template](/.env.example)

```bash
cp .env .env.example
```

2. Build image

```bash
docker build -t <image> .
```

3. Run container

```bash
docker run --name <container> -p 80:<port> --env-file .env -d <image>
```
