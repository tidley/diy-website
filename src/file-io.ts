import { Encoding } from 'crypto';
import { promises as fs } from 'fs';

function delFile(fileName: string) {
  try {
    fs.unlink(fileName);
  } catch (error) {
    return error.toString();
  }
}

async function writeToFile(
  fileName: string,
  contents?: string,
  encoding?: Encoding,
): Promise<string> {
  let _encoding: Encoding = encoding || 'utf8';
  let response: string;
  await fs.writeFile(fileName, contents, _encoding),
    (err: any) => {
      response = errHandle(err);
    };
  return response;
}

async function appendToFile(fileName: string, data: string): Promise<string> {
  let response: string;
  await fs.appendFile(fileName, data),
    (err: any) => {
      response = errHandle(err);
    };
  return response;
}

async function readFromFile(
  fileName: string,
  encoding?: Encoding,
): Promise<string> {
  let _encoding: Encoding = encoding || 'utf8';
  try {
    const data = await fs.readFile(fileName, _encoding);
    return data;
  } catch (err) {
    return err.toString();
  }
}

function errHandle(err?: any): string {
  if (err) {
    return err.toString();
  } else {
    return 'ok';
  }
}

export { delFile, writeToFile, readFromFile, appendToFile };
