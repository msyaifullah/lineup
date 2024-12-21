import Counter from "./box"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/msyaifullah/sportengine",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer mma`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <div className="flex">
      <Counter />     
    </div>
  )
}
