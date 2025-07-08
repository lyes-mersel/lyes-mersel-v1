/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
export const runtime = "edge";

// Helper to load JetBrains Mono font from Google Fonts
async function loadJetBrainsMonoFont() {
  const fontUrl =
    "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&text=LyesMerselSoftwareDeveloperCraftingdigitalsolutionswithprecisionandcreativity";
  const css = await (await fetch(fontUrl)).text();
  const fontFileUrl = css.match(/src: url\((.+?)\)/)?.[1];
  if (!fontFileUrl) throw new Error("Font URL not found");
  const fontRes = await fetch(fontFileUrl);
  return fontRes.arrayBuffer();
}

// Tech stack list
const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJs",
  "SQL",
];

export async function GET() {
  const fontData = await loadJetBrainsMonoFont();

  // Use the hero image from public folder
  const heroImageUrl =
    process.env.NEXT_PUBLIC_BASE_URL +
    "/images/profile/profile_image_noBg.png?q=100";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
          color: "#fff",
          fontFamily: "JetBrains Mono",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Background decorative elements */}
        <span
          style={{
            position: "absolute",
            top: "50px",
            left: "100px",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(0, 255, 153, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "block",
          }}
        />

        <span
          style={{
            position: "absolute",
            bottom: "100px",
            right: "150px",
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "block",
          }}
        />

        {/* Left: Enhanced textual content */}
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "55%",
            gap: "20px",
            position: "relative",
          }}
        >
          {/* Status badge */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              background: "rgba(0, 255, 153, 0.1)",
              border: "1px solid rgba(0, 255, 153, 0.3)",
              borderRadius: "20px",
              fontSize: "16px",
              color: "#00ff99",
              fontWeight: 600,
              marginBottom: "16px",
              width: "220px", // Fixed: Changed from "fit-content" to specific pixel value
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#00ff99",
                borderRadius: "50%",
                display: "block",
              }}
            />
            Available for Projects
          </span>

          {/* Name with enhanced styling */}
          <span
            style={{
              fontSize: "48px",
              color: "#00ff99",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textShadow: "0 0 30px rgba(0, 255, 153, 0.3)",
            }}
          >
            Lyes Mersel
          </span>

          {/* Role with accent */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "30px",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: "4px",
                height: "30px",
                background: "#6366f1",
                borderRadius: "2px",
                display: "block",
              }}
            />
            Software Developer
          </span>

          {/* Description with highlights */}
          <span
            style={{
              fontSize: "22px",
              color: "#e2e8f0",
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: "500px",
              marginTop: "8px",
            }}
          >
            Crafting digital solutions with precision and creativity.
          </span>

          {/* Tech stack */}
          <span
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            {techStack.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: "6px 12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#cbd5e1",
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            ))}
          </span>

          {/* Accent line */}
          <span
            style={{
              marginTop: "24px",
              width: "120px",
              height: "4px",
              background:
                "linear-gradient(90deg, #00ff99 0%, #6366f1 50%, #a855f7 100%)",
              borderRadius: "2px",
              display: "block",
            }}
          />
        </span>

        {/* Right: Enhanced hero image */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Outer gradient ring */}
          <span
            style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              background:
                "linear-gradient(45deg, #00ff99, #6366f1, #a855f7, #00ff99)",
              borderRadius: "50%",
              display: "block",
            }}
          />

          {/* Inner background */}
          <span
            style={{
              position: "absolute",
              width: "410px",
              height: "410px",
              background: "#0f0f23",
              borderRadius: "50%",
              display: "block",
            }}
          />

          {/* Image container */}
          <span
            style={{
              width: "400px",
              height: "400px",
              background: "linear-gradient(135deg, #232329 0%, #2d2d35 100%)",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              src={heroImageUrl}
              width={400}
              height={400}
              style={{
                objectFit: "cover",
                filter: "brightness(1.1) contrast(1.1)",
              }}
              alt="Portfolio Hero"
            />
          </span>

          {/* Floating accent dots */}
          <span
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "20px",
              height: "20px",
              background: "#00ff99",
              borderRadius: "50%",
              display: "block",
              boxShadow: "0 0 20px rgba(0, 255, 153, 0.5)",
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              width: "16px",
              height: "16px",
              background: "#6366f1",
              borderRadius: "50%",
              display: "block",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "-10px",
              width: "12px",
              height: "12px",
              background: "#a855f7",
              borderRadius: "50%",
              display: "block",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
            }}
          />
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "JetBrains Mono",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
