-- CreateTable
CREATE TABLE "adress" (
    "id" SERIAL NOT NULL,
    "cep" TEXT,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'Brasil',
    "complement" TEXT,

    CONSTRAINT "adress_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "sheet" VARCHAR(8) NOT NULL,

    CONSTRAINT "client_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_phones" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "client_phones_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_profile" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "create_at" INTEGER NOT NULL,
    "update_at" INTEGER NOT NULL,
    "birthday" INTEGER NOT NULL,
    "adress" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "client_profile_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "date" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "weekday" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "minute" TEXT NOT NULL,

    CONSTRAINT "date_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "session_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "units" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "access" TEXT NOT NULL,
    "adress" INTEGER NOT NULL,

    CONSTRAINT "units_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_phones" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "user_phones_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_profile" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "birthday" INTEGER NOT NULL,
    "create_at" INTEGER NOT NULL,
    "update_at" INTEGER NOT NULL,
    "adress" INTEGER NOT NULL,
    "profile" TEXT NOT NULL DEFAULT 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
    "unit" INTEGER NOT NULL,
    "position" TEXT,
    "prefix" TEXT DEFAULT 'Dr',

    CONSTRAINT "users_profile_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_sheet_key" ON "client"("sheet");

-- CreateIndex
CREATE UNIQUE INDEX "client_profile_email_key" ON "client_profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "client_phones" ADD CONSTRAINT "client_phones_fk0" FOREIGN KEY ("user_id") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "client_profile" ADD CONSTRAINT "client_profile_fk0" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "client_profile" ADD CONSTRAINT "client_profile_fk1" FOREIGN KEY ("create_at") REFERENCES "date"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "client_profile" ADD CONSTRAINT "client_profile_fk2" FOREIGN KEY ("update_at") REFERENCES "date"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "client_profile" ADD CONSTRAINT "client_profile_fk3" FOREIGN KEY ("birthday") REFERENCES "date"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "client_profile" ADD CONSTRAINT "client_profile_fk4" FOREIGN KEY ("adress") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_fk0" FOREIGN KEY ("adress") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_phones" ADD CONSTRAINT "user_phones_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_profile" ADD CONSTRAINT "users_profile_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_profile" ADD CONSTRAINT "users_profile_fk1" FOREIGN KEY ("birthday") REFERENCES "date"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_profile" ADD CONSTRAINT "users_profile_fk2" FOREIGN KEY ("create_at") REFERENCES "date"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_profile" ADD CONSTRAINT "users_profile_fk3" FOREIGN KEY ("update_at") REFERENCES "date"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_profile" ADD CONSTRAINT "users_profile_fk4" FOREIGN KEY ("adress") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_profile" ADD CONSTRAINT "users_profile_fk5" FOREIGN KEY ("unit") REFERENCES "units"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
