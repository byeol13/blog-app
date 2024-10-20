package com.blog_app.blog_app.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.Date;

@jakarta.persistence.Entity
@Data
@Table(name = "article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    private String title;

    @Getter
    private String description;

    @Getter
    private String img_url;

    @Column(name = "created_at", nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    public Article() {
        this.createdAt = new Date();
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }


    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
