import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Adicione os registros que desejar
  const livro = await prisma.livro.create({
    data: {
      Titulo: 'A paciente silenciosa',
      Autor: 'Alex Michaelides',
      AnoPubli: 2019,
      Genero: 'Thriller',
    },
  });
  console.log('Livro criado:', livro);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
