import React, { useEffect, useState } from "react";
import { Container, Grid, Skeleton, GridItem, Flex } from "@chakra-ui/react";
import PodcastCard from "../global/PodcastCard";
import useGetUserPodcasts from "@/hooks/useGetUserPodcasts";

const ProfilePodcasts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { podcasts } = useGetUserPodcasts();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.lg"}>
      {isLoading && (
        <Grid
          templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={1}
          columnGap={1}
        >
          {[...Array(6)].map((_, idx) => (
            <GridItem
              key={idx}
              overflow={"hidden"}
              position={"relative"}
              aspectRatio={1 / 1}
            >
              <Skeleton height="100%" width="100%" />
            </GridItem>
          ))}
        </Grid>
      )}

      {!isLoading && podcasts?.length === 0 && <NoUserPodcasts />}

      {!isLoading && podcasts?.length > 0 && (
        <Grid
          templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={1}
          columnGap={1}
        >
          {podcasts.map((p, idx) => (
            <PodcastCard key={idx} podcast={p} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProfilePodcasts;
