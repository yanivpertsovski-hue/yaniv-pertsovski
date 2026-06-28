"use client";

import { motion } from "framer-motion";
import { Server, Shield, Database, Network, Box, HardDrive } from "lucide-react";
import { homelab } from "@/content/data/homelab";
import { TechBadge } from "@/components/shared/TechBadge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import type { LabDevice } from "@/types";

const DEVICE_ICONS: Record<LabDevice["type"], typeof Server> = {
  server: Server,
  firewall: Shield,
  switch: Network,
  router: Network,
  storage: HardDrive,
  "vm-host": Box,
  other: Database,
};

const STATUS_COLORS = {
  active: "text-[var(--success)] bg-[var(--success)]/10",
  inactive: "text-[var(--muted)] bg-[var(--surface-2)]",
  planned: "text-[var(--warning)] bg-[var(--warning)]/10",
};

function DeviceCard({ device, index }: { device: LabDevice; index: number }) {
  const Icon = DEVICE_ICONS[device.type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="glass rounded-2xl p-5 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center shrink-0">
          <Icon size={18} className="text-[var(--accent)]" />
        </div>
        <span
          className={cn(
            "text-xs font-medium px-2 py-0.5 rounded-full",
            STATUS_COLORS[device.status]
          )}
        >
          {device.status}
        </span>
      </div>

      <div>
        <h3 className="font-semibold">{device.name}</h3>
        <p className="text-xs text-[var(--muted)] capitalize">{device.type.replace("-", " ")}</p>
      </div>

      <p className="text-sm text-[var(--muted)]">{device.role}</p>

      {device.os && (
        <p className="text-xs font-mono text-[var(--muted)] bg-[var(--surface-2)] px-2 py-1 rounded">
          {device.os}
        </p>
      )}

      {device.specs && (
        <p className="text-xs text-[var(--muted)]">{device.specs}</p>
      )}

      {device.tags && device.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {device.tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function HomelabContent({ locale }: { locale: string }) {
  return (
    <div className="min-h-dvh py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-mono text-sm mb-4">
            $ ssh homelab.local
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Home <span className="gradient-text">Lab</span>
          </h1>
          <p className="text-[var(--muted)] text-lg max-w-2xl leading-relaxed">
            {homelab.description}
          </p>
        </motion.div>

        {/* Network diagram placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-16 min-h-64 flex items-center justify-center border-dashed border-2 border-[var(--border)]"
        >
          {homelab.diagramUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={homelab.diagramUrl} alt="Network diagram" className="max-w-full rounded-xl" />
          ) : (
            <div className="text-center text-[var(--muted)]">
              <Network size={48} className="mx-auto mb-4 opacity-30" />
              <p className="font-mono text-sm">TODO: Add network diagram</p>
              <p className="text-xs mt-1 opacity-60">
                Place diagram at public/images/homelab/diagram.png
              </p>
            </div>
          )}
        </motion.div>

        {/* Devices */}
        <SectionHeader title="Devices" subtitle="Hardware in the lab" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {homelab.devices.map((device, i) => (
            <DeviceCard key={device.id} device={device} index={i} />
          ))}
        </div>

        {/* Services */}
        <SectionHeader title="Running Services" subtitle="What's deployed" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {homelab.services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-xl p-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--success)]" />
                <h3 className="font-semibold text-sm">{service.name}</h3>
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
