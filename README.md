# PracticeNest

```bash
mkdir newFolderProject
cd newFolder
```

```bash
npm init -y
```

```bash
npm create vite@latest frontend --template react
cd frontend
npm install
npm run dev
```

```bash
cd root of newFolderProject
npm install -g @nestjs/cli
nest new backend
cd backend
npm install @nestjs/mongoose mongoose
npm install @nestjs/config
npm run start:dev 
```

Loads with type/linter/prettier errors 
does not handle the carriage return for windows. Not sure where it is being overridden.
