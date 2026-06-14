import { bestiaryShardLoaders, bestiaryShardStats } from "./bestiaryShardLoaders";

export async function loadExtendedBestiary() {
  const shardEntries = Object.entries(bestiaryShardLoaders);
  const results = await Promise.allSettled(
    shardEntries.map(([, loadShard]) => loadShard())
  );

  return results.flatMap((result, index) => {
    if (result.status === "fulfilled") {
      return Array.isArray(result.value) ? result.value : [];
    }

    console.warn(
      `[Bestiary] Impossibile caricare lo shard "${shardEntries[index][0]}".`,
      result.reason
    );
    return [];
  });
}

export async function loadExtendedBestiaryStats() {
  return bestiaryShardStats;
}
