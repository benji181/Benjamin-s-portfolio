import { useState } from "react";
import { motion } from "framer-motion";
import {
    Github,
    Calendar,
    Activity,
    ExternalLink,
    TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GitHubContributions = () => {
    const [selectedYear, setSelectedYear] = useState("2024");

    const contributionYears = ["2024", "2023", "2022", "2021"];

    return (
        <section id="github" className="py-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
            <div className="absolute top-1/3 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-green-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-8 sm:w-12 h-0.5 bg-green-500" />
                        <span className="text-green-500 font-semibold uppercase tracking-wider text-xs sm:text-sm">
              GitHub Contributions
            </span>
                        <div className="w-8 sm:w-12 h-0.5 bg-green-500" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Open Source Activity
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                        Real-time tracking of my coding contributions and project work on GitHub
                    </p>
                </div>

                {/* GitHub Profile Card */}
                <Card className="border-border/30 bg-gradient-to-br from-green-500/5 to-blue-500/5 backdrop-blur-sm mb-8 sm:mb-12">
                    <CardContent className="p-5 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            {/* Profile Info */}
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 p-1">
                                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                            <Github className="h-8 w-8 sm:h-10 sm:w-10 text-foreground" />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <Activity className="h-3 w-3 text-background" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold">@benji181</h3>
                                    <p className="text-sm sm:text-base text-muted-foreground">
                                        Full-stack developer building real projects
                                    </p>
                                </div>
                            </div>

                            {/* View Profile Button */}
                            <div className="flex gap-3 sm:ml-auto">
                                <Button
                                    className="rounded-full"
                                    asChild
                                >
                                    <a
                                        href="https://github.com/benji181"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <Github className="h-4 w-4" />
                                        View GitHub Profile
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="rounded-full"
                                    asChild
                                >
                                    <a
                                        href="https://github.com/benji181?tab=repositories"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        View Repositories
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Year Selection */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mr-4">
                        <Calendar className="h-4 w-4" />
                        View contributions for:
                    </div>
                    {contributionYears.map((year) => (
                        <Button
                            key={year}
                            variant={selectedYear === year ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedYear(year)}
                            className="rounded-full"
                        >
                            {year}
                        </Button>
                    ))}
                </div>

                {/* Main Contribution Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 sm:mb-16"
                >
                    <Card className="border-border/30 bg-gradient-to-b from-card to-card/95 backdrop-blur-sm">
                        <CardContent className="p-5 sm:p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <Activity className="h-5 w-5 text-green-500" />
                                    <h3 className="text-lg sm:text-xl font-bold">Contribution Graph</h3>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4" />
                                    Updated daily
                                </div>
                            </div>

                            {/* GitHub Contribution Chart */}
                            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-background/50 to-background/30 p-4">
                                <img
                                    src={`https://ghchart.rshah.org/3b82f6/benji181`}
                                    alt={`GitHub Contributions - ${selectedYear}`}
                                    className="w-full h-auto rounded-md"
                                    loading="lazy"
                                />
                            </div>

                            {/* Contribution Legend */}
                            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-sm bg-[#ebedf0]" />
                                        <span>No contributions</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-sm bg-[#9be9a8]" />
                                        <span>1-9 contributions</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-sm bg-[#40c463]" />
                                        <span>10-19 contributions</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-sm bg-[#30a14e]" />
                                        <span>20-29 contributions</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-sm bg-[#216e39]" />
                                        <span>30+ contributions</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>



            </div>
        </section>
    );
};

export default GitHubContributions;