import type {UserConfig} from '@commitlint/types';
const Configuration:UserConfig = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      'type-enum': [2, 'always', [
          "feat", "upd", "del", "fix", "refactor", "test", "perf", "docs", "style", "revert", "chore"
      ]]
    }
}

export default Configuration