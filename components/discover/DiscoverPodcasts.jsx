"use client"
import React, { useEffect, useState } from "react";
import { Container, Grid, Skeleton, GridItem, Flex } from "@chakra-ui/react";
import useGetUserPodcasts from "@/hooks/useGetUserPodcasts";
import PodcastCard from "../global/PodcastCard";

const DiscoverPodcasts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.lg"}>
      {isLoading && (
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
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

      {!isLoading && (
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
          gap={1}
          columnGap={1}
        >
          {[...Array(6)].map((p, idx) => (
            <PodcastCard key={idx} podcast={p} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default DiscoverPodcasts;
