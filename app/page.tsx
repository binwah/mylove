'use client'

import { motion } from 'framer-motion'
import { Cover } from '@/components/scrapbook/cover'
import { Polaroid } from '@/components/scrapbook/polaroid'
import { NoteCard } from '@/components/scrapbook/note-card'
import { RansomNote } from '@/components/scrapbook/ransom-note'
import { Sticker, PinBadge } from '@/components/scrapbook/stickers'
import { MusicPlayer } from '@/components/scrapbook/music-player'

// Ganti nama + foto di /public/photos untuk personalisasi.
const NAME = "nidaul hasanah az-zakiyah♡";

const reasons = [
  'senyummu yanggg maniss ngalahin gulaa 1 ton, yang ga pernah membuat aku bosenn liatnyaa',
  'sifattt muu yangg lucuuu, dan gak terdugaa, sukakk akuu.',
  'bahumuuu yangg nyamannnnn, kayak magnet ajaaaa mbakk',
  'kamu suka manjain aku,akakakakak sukaa bangetttt',
  'karena...kamu itu kamu, itu alasan utamaa. dan ga butuh alasan lain sayanggg.♡',
]

const promises = [
  'gaakan kutinggal, rill ini. s&k berlaku tapi.',
  'selalu sayanggg, kapan seh aku ga tau sayangg??.',
  'disimuu selaluu, pokokk gituu :v',
  'kan kuusahakannn apapun deh intinya, kecuali kalauu disuruh ninggalin ke, yo moh.',
]

export default function Page() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Cover name={NAME} />

      {/* ---------- PAGE 1 · INTRO ---------- */}
      <section className="relative mx-auto max-w-4xl px-5 py-20 md:py-28">
        <Sticker
          name="heart"
          rotate={-12}
          className="left-2 top-6 h-9 w-9 text-berry md:left-8"
          float
        />
        <Sticker
          name="sparkles"
          rotate={8}
          className="right-3 top-10 h-10 w-10 text-sky md:right-10"
          float
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-2xl"
        >
          <p className="text-center font-[family-name:var(--font-typewriter)] text-xs uppercase tracking-[0.35em] text-foreground/50">
            halaman satu — tempat aku bilang aku sayang kamu
          </p>

          <NoteCard rotate={-1.5} tape="tape-pink" className="mt-6">
            <span className="text-3xl text-berry">haiii sayanggggg.</span>
            <br />
            <br />
            aku bikin scrapbook kecil ini buat kamuuuu,sebagai pengingat betapa
            sayangnya aku ke kamuuu. betapa besarnya aku menghargaimuuuu.
            terlepas jarak yang akan memisahkann, akuuu pingin kamu tauu, kamu
            ga akan pernah tergantikan di hatikuuuu, aku sayang kamuuu,
            selamanyaa. lof u♡
          </NoteCard>
        </motion.div>
      </section>

      {/* ---------- PAGE 2 · RANSOM BANNER ---------- */}
      <section className="relative mx-auto max-w-5xl px-5 py-10">
        <div className="paper-grid relative rounded-2xl border-4 border-card bg-card/50 px-4 py-12 shadow-[0_12px_35px_rgba(0,0,0,0.15)]">
          <Sticker
            name="heart"
            rotate={-10}
            className="left-4 top-4 h-9 w-9 text-berry"
          />
          <Sticker
            name="flower"
            rotate={10}
            className="right-4 top-4 h-9 w-9 text-bubblegum"
          />
          <RansomNote text="MY LOVE" />
          <p className="mt-6 text-center font-[family-name:var(--font-hand)] text-2xl text-foreground/70">
            kamuuuu &amp; akuuuuu, untuk selamanyaaa.
          </p>
        </div>
      </section>

      {/* ---------- PAGE 3 · REASONS I LOVE YOU ---------- */}
      <section className="relative mx-auto max-w-4xl px-5 py-16 md:py-24">
        <Sticker
          name="sun"
          rotate={0}
          className="left-6 top-2 h-11 w-11 text-mustard md:left-12"
          float
        />
        <Sticker
          name="star"
          rotate={-10}
          className="right-6 top-6 h-9 w-9 text-sky md:right-12"
          float
        />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-[family-name:var(--font-gochi)] text-4xl text-berry md:text-6xl"
        >
          alasan aku sayang kamu :v
        </motion.h2>
        <p className="mt-2 text-center font-[family-name:var(--font-typewriter)] text-xs uppercase tracking-[0.3em] text-foreground/50">
          (njir, banyak banget aslinya, tapi aku tulis 5 aja ya?? akakakakaka)
        </p>

        <div className="mt-12 flex flex-col gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <NoteCard
                rotate={i % 2 === 0 ? -2 : 2}
                color={i % 2 === 0 ? "bg-mustard" : "bg-sky"}
                tape={i % 2 === 0 ? "tape-pink" : "tape"}
                className="max-w-md"
              >
                <span className="mr-2 text-3xl text-berry">{`0${i + 1}.`}</span>
                {reason}
              </NoteCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- PAGE 4 · MESSY GALLERY ---------- */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Sticker
          name="sparkles"
          rotate={0}
          className="left-1/2 top-2 h-12 w-12 -translate-x-1/2 text-bubblegum"
          float
        />

        <div className="grid grid-cols-1 items-center gap-y-14 md:grid-cols-3 md:gap-x-6 md:gap-y-20">
          <div className="flex justify-center md:justify-start">
            <Polaroid
              src="/photos/film-1.jpg"
              alt="Foto pap malam itu."
              caption="lucu banget kamu dengan kacamata barumu yaallah...."
              rotate={-5}
              tape="tape-sky"
            />
          </div>

          <div className="flex justify-center">
            <NoteCard
              rotate={3}
              color="bg-mustard"
              tape="tape"
              className="max-w-xs"
            >
              inget gak? ketika kita lagi di bioskop? saat aku senden di bahumu?
              aku ngerasa tenang banget, nyaman banget, dan aku pengin momen itu
              nggak pernah berakhir. makasih udah bikin aku ngerasa aman,
              sayang. ♡
            </NoteCard>
          </div>

          <div className="flex justify-center md:justify-end">
            <Polaroid
              src="/photos/film-2.jpg"
              alt="kamu main dengan teman-temanmu kemarin."
              caption="kamu yang nyolong gula dari kayangan."
              rotate={6}
              tape="tape-pink"
              tapePosition="corners"
            />
          </div>

          <div className="flex justify-center md:justify-end md:order-5">
            <Polaroid
              src="/photos/film-3.jpg"
              alt="kamu saat lagi haflah..."
              caption="saat kamu lagi haflah, matane ayune seh cuikk."
              rotate={4}
              tape="tape"
            />
          </div>

          <div className="flex flex-col items-center gap-6">
            <PinBadge className="bg-bubblegum" rotate={-8}>
              milikku, walaupun gitulah, bah loff uu ♡
            </PinBadge>
            <PinBadge className="bg-sky" rotate={6}>
              orang favoritku, tapi aku kalah sama motor..
            </PinBadge>
          </div>

          <div className="flex justify-center md:justify-start">
            <Polaroid
              src="/photos/film-4.jpg"
              alt="Jalanan kota yang nostalgik saat senja"
              caption="dehel? gula kayangan balikin mbak."
              rotate={-6}
              tape="tape-sky"
              tapePosition="corners"
            />
          </div>
        </div>
      </section>

      {/* ---------- PAGE 5 · PROMISES ---------- */}
      <section className="relative mx-auto max-w-4xl px-5 py-16 md:py-24">
        <div className="paper-grid relative rounded-2xl border-4 border-card bg-card/50 px-5 py-14 shadow-[0_12px_35px_rgba(0,0,0,0.15)]">
          <Sticker
            name="heart"
            rotate={-12}
            className="left-5 top-4 h-9 w-9 text-berry"
            float
          />
          <Sticker
            name="flower"
            rotate={10}
            className="right-5 top-5 h-9 w-9 text-bubblegum"
            float
          />

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="text-center font-[family-name:var(--font-gochi)] text-4xl text-berry md:text-6xl"
          >
            janji-janjiku mbakk, cekelennn.
          </motion.h2>

          <div className="mt-10 flex flex-col items-center gap-6">
            {promises.map((promise, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 130,
                  damping: 15,
                }}
              >
                <PinBadge
                  className={
                    i === 1 ? "bg-berry text-primary-foreground" : "bg-card"
                  }
                  rotate={i % 2 === 0 ? -3 : 3}
                >
                  {promise}
                </PinBadge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PAGE 6 · CLOSING NOTE ---------- */}
      <section className="relative mx-auto max-w-3xl px-5 pb-32 pt-10">
        <Sticker
          name="pin"
          rotate={0}
          className="left-6 top-0 h-8 w-8 text-berry"
        />
        <Sticker
          name="heart"
          rotate={-12}
          className="right-8 top-4 h-10 w-10 text-bubblegum"
          float
        />

        <NoteCard
          rotate={1.5}
          tape="tape"
          color="bg-card"
          className="mx-auto max-w-xl"
        >
          <span className="text-3xl text-berry">
            akhirnya sampai di halaman terakhirrr. tapi tenangg~~ cintaku unlimited akakakakaka
          </span>
          <br />
          <br />
          ah intinya pokok makasih udah bertahan, he rek yang liat dari akun seken nya mbakku. doain bisa bertahann :v akakakaka intinya loff uu(setiap buka web ini harus jawab di chat bah) 🩷
          <br />
          <br />
          <span className="text-xl text-foreground/60">
            — dengan seluruh hatiku, buat mantanku yang paling aku sayanggggggggggggggggggggg.
          </span>
        </NoteCard>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Sticker
            name="heart"
            className="relative h-6 w-6 text-berry"
            style={{ position: "relative" }}
          />
          <Sticker
            name="sparkles"
            className="relative h-6 w-6 text-sky"
            style={{ position: "relative" }}
          />
          <Sticker
            name="heart"
            className="relative h-6 w-6 text-bubblegum"
            style={{ position: "relative" }}
          />
        </div>
      </section>

      <MusicPlayer />
    </main>
  );
}
