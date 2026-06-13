import { bestiaryShardLoaders, bestiaryShardStats } from "./bestiaryShardLoaders";

export async function loadExtendedBestiary() {
  const shards = await Promise.all(
    Object.values(bestiaryShardLoaders).map((loadShard) => loadShard())
  );

  return shards.flat();
}

export async function loadExtendedBestiaryStats() {
  return bestiaryShardStats;
}
