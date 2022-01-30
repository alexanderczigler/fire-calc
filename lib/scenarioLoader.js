import { existsSync, mkdirSync, readFileSync } from 'fs';
import os from 'os'

const check = dir => {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
}

const scenarioLoader = {
  loadScenario: (name) => {
    const home = os.homedir();
    const dir = `${home}/.fire-calc`

    check(dir)

    if (!existsSync(`${dir}/${name}.json`)) {
      throw new Error(`There is no scenario named ${name}`)
    }

    return JSON.parse(
      readFileSync(`${dir}/${name}.json`)
    );
  }
}

export default scenarioLoader