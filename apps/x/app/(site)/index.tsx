import { ThemeTint } from '@tamagui/logo'
import { getCompilationExamples } from '@tamagui/mdx'
import { useLoader } from 'vxs'
import { YStack } from 'tamagui'
import { HomeAnimations } from '~/features/site/home/HomeAnimations'
import { HomeCommunity } from '~/features/site/home/HomeCommunity'
import { HomeExampleProps } from '~/features/site/home/HomeExampleProps'
import { HomeExamples } from '~/features/site/home/HomeExamples'
import { HomeFeaturesGrid } from '~/features/site/home/HomeFeaturesGrid'
import { HomeGlow } from '~/features/site/home/HomeGlow'
import { Hero } from '~/features/site/home/HomeHero'
import { HomeHeroBelow } from '~/features/site/home/HomeHeroBelow'
import { HomePerformance } from '~/features/site/home/HomePerformance'
import { HomeResponsive } from '~/features/site/home/HomeResponsive'
import { HomeThemes } from '~/features/site/home/HomeThemes'
import { HomeTypography } from '~/features/site/home/HomeTypography'
import { HomeSection, SectionTinted, TintSection } from '~/features/site/home/TintSection'
import { ThemeNameEffect } from '~/features/site/theme/ThemeNameEffect'

export async function loader() {
  return await getCompilationExamples()
}

export default function TamaguiHomePage() {
  const { compilationExamples } = useLoader(loader)

  if (!compilationExamples) {
    return null
  }

  return (
    <>
      <ThemeNameEffect colorKey="$color2" />
      <ThemeTint>
        <HomeGlow />
        <YStack
          fullscreen
          className="grain"
          o={0.2}
          style={{
            mixBlendMode: 'hard-light',
            maskImage: `linear-gradient(transparent, rgba(0, 0, 0, 1) 100px)`,
          }}
          // o={0}
        />
        <TintSection index={0} p={0}>
          <Hero />
        </TintSection>
        <HomeHeroBelow />
        <TintSection index={2} contain="paint layout" zi={1000}>
          <YStack
            pe="none"
            zi={0}
            fullscreen
            className="bg-dot-grid"
            style={{
              maskImage: `linear-gradient(transparent, #000, transparent)`,
            }}
          />
          <HomeExamples examples={compilationExamples} />
        </TintSection>
        <TintSection my={-50} index={3} contain="paint layout" pos="relative" zi={100}>
          <YStack
            pe="none"
            zi={0}
            fullscreen
            className="bg-dot-grid"
            style={{
              maskImage: `linear-gradient(transparent, #000, transparent)`,
            }}
          />
          <HomeThemes />
        </TintSection>
        <TintSection index={4} mb={-120} zIndex={10000}>
          <HomeResponsive />
        </TintSection>
        <TintSection index={5} p={0} zIndex={0}>
          <SectionTinted gradient bubble>
            <HomePerformance />
          </SectionTinted>
        </TintSection>
        <TintSection index={6} zi={100}>
          <YStack
            fullscreen
            className="bg-grid"
            style={{
              maskImage: `linear-gradient(transparent, #000, transparent)`,
            }}
          />
          <HomeAnimations animationCode={``} />
        </TintSection>
        <TintSection index={7} zi={1}>
          <HomeFeaturesGrid />
          <YStack
            pe="none"
            zi={2}
            fullscreen
            className="bg-dot-grid"
            style={{
              maskImage: `linear-gradient(transparent, #000, transparent)`,
            }}
          />
        </TintSection>
        <TintSection index={8} my="$-4" p={0} zIndex={100}>
          <SectionTinted zi={1000} bubble gradient>
            <HomeTypography />
          </SectionTinted>
        </TintSection>
        <HomeSection zi={10}>
          <YStack
            pe="none"
            zi={0}
            fullscreen
            className="bg-dot-grid"
            style={{
              maskImage: `linear-gradient(transparent, #000, transparent)`,
            }}
          />
          <HomeExampleProps />
        </HomeSection>
        <HomeSection zi={0}>
          <HomeCommunity />
        </HomeSection>
      </ThemeTint>
    </>
  )
}
