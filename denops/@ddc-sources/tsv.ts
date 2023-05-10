import {
  BaseSource,
  Item,
} from "https://deno.land/x/ddc_vim@v3.4.0/types.ts";

import {
  Denops,
} from "https://deno.land/x/ddc_vim@v3.4.0/deps.ts";

import {
    parse,
} from "http://deno.land/std@0.186.0/csv/parse.ts"

type Params = Record<never, never>;

export class Source extends BaseSource<Params> {
  override async gather(
      args: {
        denops: Denops;
      }
  ): Promise<Item[]> {
      const tsv await Deno.readTextFilesync("choshoctl.tsv",{encoding: "utf8"});
      const result = await parse(tsv,{
          skipFirstRow: false,
          separator: '\t',
      })

      return result;
  }

  override params(): Params {
    return {};
  }
}
