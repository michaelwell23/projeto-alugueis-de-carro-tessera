export class ImportCategoryUseCase {
  constructor(parameters) {}

  execute(file: Express.Multer.File) {
    console.log(file);
  }
}
